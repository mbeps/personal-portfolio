#!/bin/bash

# Navigate to the directory where the script is located
cd "$(dirname "$0")"

# Loop through all subdirectories
find . -type d | while read -r dir
do
    # Change into each directory
    cd "$dir"

    # Rename all .jpg files to 'certificate.jpg'
    count=0
    for file in *.jpg; do
        # Skip if no .jpg files are found
        [ -e "$file" ] || continue

        # Rename file
        let count+=1
        mv "$file" "certificate.jpg"
    done

    # Return to the original directory
    cd - > /dev/null
done

echo "Renaming complete."

