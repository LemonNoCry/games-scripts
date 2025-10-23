# Mining Crew Assistant

A userscript to automate Mining Crew game interactions.

## Features

- **Auto Upgrade**: Automatically clicks all available upgrade buttons in the free upgrades panel
- **Smart Detection**: Only clicks visible upgrade buttons to avoid invalid operations
- **Real-time Monitoring**: Checks for upgrade opportunities every second to ensure no free upgrades are missed

## Installation

1. Install a userscript manager (such as [Tampermonkey](https://www.tampermonkey.net/))
2. Click [MiningCrewScript.usr.js](MiningCrewScript.usr.js) to install the script
3. Visit [Mining Crew Game](https://gltyx.github.io/mining-crew/) and the script will run automatically

## Usage

The script runs automatically after installation, no manual operation required:

- Automatically detects the free upgrades panel on the page
- Scans all visible upgrade buttons every second
- Automatically clicks all available free upgrades
- Outputs upgrade logs to console for debugging

## How It Works

The script works through the following process:

1. **Target Detection**: Finds the `#freeUpgradesPanel` element on the page
2. **Button Filtering**: Gets all buttons with the `.upgrade-button-outer` class
3. **Visibility Check**: Uses `getComputedStyle` to confirm buttons are visible
4. **Auto Click**: Executes click operations on all visible buttons
5. **Loop Execution**: Repeats the check process every 1 second

## Compatibility

- ✅ Chrome + Tampermonkey
- ✅ Firefox + Greasemonkey
- ✅ Edge + Tampermonkey
- ✅ Game Version: All versions

## Notes

- Script only runs on `https://gltyx.github.io/mining-crew/*` domain
- Does not affect the normal game mechanics
- Recommended to enable script after the game has fully loaded
- Check browser console for log output if issues occur

## Changelog

### v1.0.0

- Initial release
- Implemented auto-click free upgrade functionality
- Added console log output

## License

MIT License - See [LICENSE](../../LICENSE) file for details

## Author

- **LemonNoCry**

## Contributing

Issues and Pull Requests are welcome!
