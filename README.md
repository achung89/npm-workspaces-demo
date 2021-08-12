# npm-workspaces-demo

## Global dependencies

Node 16.x.x
NPM 7.x.x
zx 2.x.x

## scripts

To run a command in a workspace, use the `<npm command> -w <name of workspace>`
To run a command in all workspaces, use the `-ws` flag instead of `-w` flag.

## create a workspace

1. Create a folder called `workspace-b` in `packages`
2. Add `./packages/workspace-a` to "workspaces" attribute in the root of package-json. This adds the `workspace-b` folder to the workspace
3. Run `npm init -w ./packages/workspace-a` to create a package.json in `workspace-b`
4. Install a package in the workspace using `npm install -w ./packages/workspace-b <package name>`
