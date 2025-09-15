## Shared functions between release and ci-release.

check_required_commands() {
    echo "Checking required command..."
    for cmd in gh git node npm; do
        if ! command -v "$cmd" &> /dev/null; then
            echo "Error: $cmd is not installed or not in PATH"
            exit 1
        fi
    done
}

read_package_metadata() {
    echo "Reading package metadata..."
    package_name=$(node -p "require('./package.json').name")
    package_version=$(node -p "require('./package.json').version")
    echo "Package: $package_name@$package_version"
}

check_changelog_entry() {
    # Ensure there's a line `[version] - current_date` in CHANGELOG.md
    if [ -f "CHANGELOG.md" ]; then
        echo "Checking changelog entry..."
        current_date=$(date +%Y-%m-%d)
        changelog_line="## [$package_version] - $current_date"
        if ! grep -q -Fx "$changelog_line" CHANGELOG.md; then
            echo "Error: missing CHANGELOG.md entry: $changelog_line"
            exit 1
        fi
    fi
}

check_clean_working_directory() {
    # Verify that the git working directory is clean after build
    echo "Checking git working directory is clean..."
    if ! status="$(git status --porcelain)" || [ -n "$status" ]; then
        echo "Error: Git working directory is dirty. Please commit or stash your changes."
        exit 1
    fi
}
