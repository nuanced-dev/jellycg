# Jelly (Nuanced)

## Release Process

1. Run the release script:

   ```sh
   ./script/release
   ```

   This does some basic checks, creates a new version tag from the `package.json` version, and pushes that to GitHub.
   That triggers the workflow that creates the actual release.

2. Publish the release via Anystack UI.

