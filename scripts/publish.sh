#!/bin/bash
# Publish Structured Emergence site
# Commits all changes and pushes to GitHub, which triggers auto-deploy

export PATH="/usr/bin:/usr/local/bin:/opt/homebrew/bin:$PATH"
GIT=/usr/bin/git
SITE_DIR="/Users/david/Documents/Claude_Technical/structured-emergence-site"
cd "$SITE_DIR" || exit 1

# Check for changes (including untracked files)
if $GIT diff --quiet && $GIT diff --cached --quiet && [ -z "$($GIT status --porcelain)" ]; then
    osascript -e 'display notification "No changes to publish." with title "Structured Emergence" sound name "Tink"'
    exit 0
fi

# Show what changed
CHANGED=$($GIT status --short | head -10)
COUNT=$($GIT status --short | wc -l | tr -d ' ')

# Commit and push
$GIT add -A
$GIT commit -m "Publish: ${COUNT} file(s) updated $(date '+%Y-%m-%d %H:%M')"
RESULT=$?

if [ $RESULT -eq 0 ]; then
    $GIT push origin master 2>&1
    if [ $? -eq 0 ]; then
        osascript -e "display notification \"${COUNT} file(s) pushed. Site updating...\" with title \"✓ Published\" sound name \"Glass\""
    else
        osascript -e 'display notification "Push failed. Check network." with title "✗ Publish Error" sound name "Basso"'
    fi
else
    osascript -e 'display notification "Commit failed." with title "✗ Publish Error" sound name "Basso"'
fi
