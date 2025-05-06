// This script handles the interactive elements of the GitHub Forge page.
// It includes a terminal simulation, progress bar updates, and command execution
        // Interactive Terminal
        const commands = [
            'forge init [project] - Start new project',
            'forge lint - Analyze code quality',
            'forge mentor - Get live help',
            'forge deploy - Ship your project'
        ];

        let currentCommand = 0;
        const terminal = document.querySelector('.gf-terminal');

        function cycleCommands() {
            terminal.innerHTML = `<span class="gf-command">$ ${commands[currentCommand]}</span>`;
            currentCommand = (currentCommand + 1) % commands.length;
            setTimeout(cycleCommands, 3000);
        }
        cycleCommands();

        // Progress Simulation
        document.querySelectorAll('.gf-progress-fill').forEach(progress => {
            const targetWidth = Math.min(parseInt(progress.style.width) + 30, 100);
            progress.style.width = `${targetWidth}%`;
        });

        // Interactive Command Handler
        document.querySelectorAll('.gf-command').forEach(command => {
            command.addEventListener('click', () => {
                alert(`Running: ${command.textContent.trim()}`);
            });
        });
        