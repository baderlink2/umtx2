// @ts-check

const CUSTOM_ACTION_APPCACHE_REMOVE = "appcache-remove";

/**
 * @typedef {Object} PayloadInfo
 * @property {string} displayTitle
 * @property {string} description
 * @property {string} fileName - path relative to the payloads folder
 * @property {string} author
 * @property {string} projectSource
 * @property {string} binarySource - should be direct download link to the included version, so that you can verify the hashes
 * @property {string} version
 * @property {string[]?} [supportedFirmwares] - optional, these are interpreted as prefixes, so "" would match all, and "4." would match 4.xx, if not set, the payload is assumed to be compatible with all firmwares
 * @property {number?} [toPort] - optional, if the payload should be sent to "127.0.0.1:<port>" instead of loading directly, if specified it'll show up in webkit-only mode too
 * @property {string?} [customAction]
 */

/**
 * @type {PayloadInfo[]}
*/
const payload_map = [
    // { // auto-loaded
    //     displayTitle: "PS5 Payload ELF Loader",
    //     description: "Uses port 9021. Persistent network elf loader",
    //     fileName: "elfldr.elf",
    //     author: "john-tornblom",
    //     projectSource: "https://github.com/ps5-payload-dev/elfldr",
    //     binarySource: "https://github.com/ps5-payload-dev/elfldr/releases/download/v0.19/Payload.zip",
    //     version: "0.19",
    //     supportedFirmwares: ["1.", "2.", "3.", "4.", "5."]
    // },
    {
        displayTitle: "ETAHEN 2.3B New",
        description: "FOR 1.XX TO 8.XX",
        fileName: "etaHEN22b.bin",
        author: "Date UPDATE 05-09-2025",
        projectSource: "https://github.com/etaHEN/etaHEN",
        binarySource: "https://github.com/etaHEN/etaHEN/blob/360e7c0d2dddf4f4645599d51d652e707c0b717b/etaHEN-2.0b.bin",
        version: "2.3B",
        toPort: 9021
    },
    {
        displayTitle: "ETAHEN V2.2B",
        description: "FOR 1.XX TO 5.XX",
        fileName: "etaHEN.bin",
        author: "Last UPDATE 11-05-2025",
        projectSource: "https://github.com/etaHEN/etaHEN",
        binarySource: "https://github.com/etaHEN/etaHEN/blob/360e7c0d2dddf4f4645599d51d652e707c0b717b/etaHEN-2.0b.bin",
        version: "2.1B",
        toPort: 9021
    },

	
        {
        displayTitle: "KSTUFF FIX DLC",
        description: "FOR 1.XX-7.XX",
        fileName: "test.elf",
        author: "TANK YOU ESCHOSTRECH",
        projectSource: "https://github.com/etaHEN/etaHEN",
        binarySource: "https://github.com/etaHEN/etaHEN/blob/360e7c0d2dddf4f4645599d51d652e707c0b717b/etaHEN-2.0b.bin",
        version: "SOON",
        toPort: 9021
    },
    {
        displayTitle: "DUMP GAME CD PS5 PPSAXXXXX",
        description: "EASY DUMP CD TO PPSAXXXXXX",
        fileName: "dumpgame.elf",
        author: "Seported 1.xx to high FW",
        projectSource: "https://github.com/EchoStretch/kstuff",
        binarySource: "https://github.com/EchoStretch/kstuff/releases/download/v1.3/kstuff.elf",
        version: "1.0",
        supportedFirmwares: ["3.", "4.", "5."],
        toPort: 9021
    },
	{
        displayTitle: "Kstuff Toggle V.02 ON-OFF",
        description: "Paus Manual Kstuff",
        fileName: "kstufftoglle.elf",
        author: "Last UPDATE 17-05-2025",
        projectSource: "https://github.com/EchoStretch/kstuff",
        binarySource: "https://github.com/EchoStretch/kstuff/releases/download/v1.3/kstuff.elf",
        version: "0.2",
        supportedFirmwares: ["3.", "4.", "5."],
        toPort: 9021
    },

    
    {
        displayTitle: "App_title By Master",
        description: "Tank You Master",
        fileName: "app_title.elf",
        author: "Creat By Master",
        projectSource: "https://github.com/MasterPS0/PS5-appls-tital/releases",
        binarySource: "https://github.com/MasterPS0/PS5-appls-tital/releases",
        version: "V1.0",
        toPort: 9021
    },

	    {
        displayTitle: "ftpsrv",
        description: "FTP server. Runs on port 2121.",
        fileName: "ftpsrv.elf",
        author: "john-tornblom",
        projectSource: "https://github.com/ps5-payload-dev/ftpsrv",
        binarySource: "https://github.com/ps5-payload-dev/pacbrew-repo/actions/runs/14012252230",
        version: "0.11.3",
        toPort: 9021
    },
    {
        displayTitle: "websrv",
        description: "Custom homebrew loader. Runs on port 8080.",
        fileName: "websrv.elf",
        author: "john-tornblom",
        projectSource: "https://github.com/ps5-payload-dev/websrv",
        binarySource: "https://github.com/ps5-payload-dev/websrv/actions/runs/14318408868",
        version: "0.22",
        toPort: 9021
    },
	{
        displayTitle: "Remover V1.01 Cache Webkit",
        description: "By Vladimir.",
        fileName: "remover.elf",
        author: "By Vladimir",
        projectSource: "https://github.com/vladimir-cucu/ps5-webkit-cache-remover",
        binarySource: "https://github.com/vladimir-cucu/ps5-webkit-cache-remover",
        version: "V1.01",
        toPort: 9021
    },
    
    {
        // https://github.com/Storm21CH/PS5_Browser_appCache_remove
        displayTitle: "REMOVE CACHE AND CLEAN BROWSER",
        description: "CLEAN CACHE 1.XX TO 5.XX",
        fileName: "",
        author: "Storm21CH, idlesauce",
        projectSource: "",
        binarySource: "",
        version: "1.0",
        customAction: CUSTOM_ACTION_APPCACHE_REMOVE
    }

];






