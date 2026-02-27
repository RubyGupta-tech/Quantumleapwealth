import os

directory = r"c:\Users\ruby4\New folder\Quantumleapwealth"
old_name = "Quantum Leap Wealth"
new_name = "Quantum Leap Wealth"

# Just to be safe, let's also do a case-insensitive check if there are any variations, but the standard one is enough based on grep
extensions = ('.html', '.py')

modified_files = []

for root, dirs, files in os.walk(directory):
    for file in files:
        if file.endswith(extensions) and file != 'replace_name.py':
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            if old_name in content:
                new_content = content.replace(old_name, new_name)
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                modified_files.append(filepath)

print(f"Modified {len(modified_files)} files.")
for f in modified_files:
    print(f" - {os.path.relpath(f, directory)}")
