# npm-workspaces-demo

## Global dependencies

Node 16.x.x
NPM 7.x.x
zx 2.x.x

## scripts

To run a command in a workspace, use the `<npm command> -w <name of workspace>`
To run a command in all workspaces, use the `-ws` flag instead of `-w` flag.

## create a workspace

1. Create a folder called `workspace-c` in `packages`
2. Run `npm init -w workspace-c` to create a package.json in `workspace-c`
3. Install a package in the workspace using `npm install -w .workspace-c <package name>`
4. Run a script in the workspace using `npm run <script> -w workspace-c`
