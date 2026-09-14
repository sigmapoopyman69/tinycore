<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>In-Tab Linux Emulator</title>
    <style>
        body, html { margin: 0; padding: 0; width: 100%; height: 100%; background: #111; overflow: hidden; }
        #screen_container { width: 1024px; height: 768px; margin: auto; background: #000; }
    </style>
    <!-- 1. Source the correct library script asset name -->
    <script src="lib/libv86.js"></script>
</head>
<body>

    <!-- 2. Screen container element wrapper -->
    <div id="screen_container"></div>

    <script>
        window.onload = function() {
            var emulator = new V86({
                // 3. Declare the exact relative path location targeting the WebAssembly bundle
                wasm_path: "lib/v86.wasm", 
                
                // 4. Update configuration target hook from "canvas" to "screen_container"
                screen_container: document.getElementById("screen_container"),
                
                memory_size: 256 * 1024 * 1024,
                vga_memory_size: 8 * 1024 * 1024,
                boot_order: 0x213,

                bios: { url: "images/bios.bin" },
                vga_bios: { url: "images/vgabios.bin" },
                cdrom: { url: "images/Core-current.iso" },

                network_relay_url: "wss://wisp.mercurywork.shop/", 
                autostart: true
            });
        };
    </script>
</body>
</html>
