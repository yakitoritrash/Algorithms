#include <stdio.h>
#include <stdbool.h>

#define MAX_DIM 25
#define MAX_QUEUE (MAX_DIM * MAX_DIM * 2)

int M, N;
char grid[MAX_DIM][MAX_DIM];
bool visited[MAX_DIM][MAX_DIM][2];

typedef struct {
    int r, c;
    int orientation;
    int steps;
} State;

State queue[MAX_QUEUE];
int front = 0, rear = 0;

void enqueue(State s) {
    if (rear < MAX_QUEUE) {
        queue[rear++] = s;
    }
}

State dequeue() {
    return queue[front++];
}

bool is_empty() {
    return front == rear;
}

bool is_valid_cell(int r, int c) {
    if (r < 0 || r >= M || c < 0 || c >= N || grid[r][c] == 'H') {
        return false;
    }
    return true;
}

int solve(State start_state, State dest_state) {
    enqueue(start_state);
    visited[start_state.r][start_state.c][start_state.orientation] = true;

    while (!is_empty()) {
        State curr = dequeue();

        if (curr.r == dest_state.r && curr.c == dest_state.c && curr.orientation == dest_state.orientation) {
            return curr.steps;
        }

        int dr[] = {-1, 1, 0, 0};
        int dc[] = {0, 0, -1, 1};

        for (int i = 0; i < 4; i++) {
            int new_r = curr.r + dr[i];
            int new_c = curr.c + dc[i];

            bool can_move = false;
            if (curr.orientation == 0) {
                if (is_valid_cell(new_r, new_c) && is_valid_cell(new_r, new_c + 1)) {
                    can_move = true;
                }
            } else {
                if (is_valid_cell(new_r, new_c) && is_valid_cell(new_r + 1, new_c)) {
                    can_move = true;
                }
            }
            
            if (can_move && !visited[new_r][new_c][curr.orientation]) {
                visited[new_r][new_c][curr.orientation] = true;
                enqueue((State){new_r, new_c, curr.orientation, curr.steps + 1});
            }
        }

        int r = curr.r;
        int c = curr.c;

        if (curr.orientation == 0) {
            for (int offset = -1; offset <= 1; offset += 2) {
                 if (is_valid_cell(r + offset, c) && is_valid_cell(r + offset, c + 1)) {
                    int top_r = (offset == 1) ? r : r - 1;
                    if (!visited[top_r][c][1]) {
                        visited[top_r][c][1] = true;
                        enqueue((State){top_r, c, 1, curr.steps + 1});
                    }
                    if (!visited[top_r][c + 1][1]) {
                        visited[top_r][c + 1][1] = true;
                        enqueue((State){top_r, c + 1, 1, curr.steps + 1});
                    }
                 }
            }
        } else {
            for (int offset = -1; offset <= 1; offset += 2) {
                if (is_valid_cell(r, c + offset) && is_valid_cell(r + 1, c + offset)) {
                    int left_c = (offset == 1) ? c : c - 1;
                    if (!visited[r][left_c][0]) {
                        visited[r][left_c][0] = true;
                        enqueue((State){r, left_c, 0, curr.steps + 1});
                    }
                    if (!visited[r + 1][left_c][0]) {
                        visited[r + 1][left_c][0] = true;
                        enqueue((State){r + 1, left_c, 0, curr.steps + 1});
                    }
                }
            }
        }
    }

    return -1;
}

int main() {
    scanf("%d %d", &M, &N);

    int s_coords[4], S_coords[4];
    int s_count = 0, S_count = 0;

    for (int i = 0; i < M; i++) {
        for (int j = 0; j < N; j++) {
            scanf(" %c", &grid[i][j]);
            if (grid[i][j] == 's') {
                s_coords[s_count++] = i; s_coords[s_count++] = j;
            } else if (grid[i][j] == 'S') {
                S_coords[S_count++] = i; S_coords[S_count++] = j;
            }
        }
    }
    
    State start_state;
    start_state.r = (s_coords[0] < s_coords[2]) ? s_coords[0] : s_coords[2];
    start_state.c = (s_coords[1] < s_coords[3]) ? s_coords[1] : s_coords[3];
    start_state.orientation = (s_coords[0] == s_coords[2]) ? 0 : 1;
    start_state.steps = 0;

    State dest_state;
    dest_state.r = (S_coords[0] < S_coords[2]) ? S_coords[0] : S_coords[2];
    dest_state.c = (S_coords[1] < S_coords[3]) ? S_coords[1] : S_coords[3];
    dest_state.orientation = (S_coords[0] == S_coords[2]) ? 0 : 1;
    
    grid[s_coords[0]][s_coords[1]] = '0';
    grid[s_coords[2]][s_coords[3]] = '0';
    grid[S_coords[0]][S_coords[1]] = '0';
    grid[S_coords[2]][S_coords[3]] = '0';

    int result = solve(start_state, dest_state);

    if (result == -1) {
        printf("Impossible\n");
    } else {
        printf("%d\n", result);
    }

    return 0;
}

