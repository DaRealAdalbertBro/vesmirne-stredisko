module.exports = {
    mongodb: require("./modules/mongodb"),
    discordClient: require("./modules/discord-client"),
    addPointsFromMessage: require("./modules/add-points-from-message"),
    getIDFromDiscordID: require("./modules/get-id-from-discord-id"),
    countPoints: require("./modules/count-points"),
    haveItem: require("./modules/have-item"),
    itemsArray: require("./modules/items-array"),
    addHourlyItems: require("./modules/add-hourly-items"),
    stringToDuration: require("./modules/string-to-duration"),
    removeMutes: require("./modules/remove-mutes"),
    rewardVoiceActivity: require("./modules/reward-voice-activity"),
    updateChannelsStatus: require("./modules/update-channels-status"),
    webAuthenticate: require("./modules/web-authenticate"),
    parseDataForWeb: require("./modules/parse-data-for-web"),
    generateToken: require("./modules/generate-token"),
    requireLogin: require("./modules/require-login"),
    requireAdmin: require("./modules/require-admin"),
    newHelpRoom: require("./modules/new-help-room"),
    newUsersChannel: require("./modules/new-users-channel"),
    deleteUsersInactiveChannels: require("./modules/delete-users-inactive-channels"),
    getTwitchUserByTwitchID: require("./modules/get-twitch-user-by-twitch-id"),
    streamAudioQueue: require("./modules/stream-audio-queue"),
    twitchClient: require("./modules/twitch-client"),
    addPointsFromWatching: require("./modules/add-points-from-watching"),
    getUserStreaming: require("./modules/get-user-streaming"),
    getTwitchUserByName: require("./modules/get-twitch-user-by-name"),
    paypal: require("./modules/paypal"),
    remindVotes: require("./modules/remindVotes"),
    sendHelpEmbed: require("./modules/send-help-embed"),
    sendFractionEmbed: require("./modules/send-fraction-embed"),
    sendAdvertisionEmbed: require("./modules/send-advertising-embed"),
    requireInfromatorRole: require("./modules/require-informator-role"),
    bitcoinMiningGame: require("./modules/bitcoin-mining-game"),
    droidGame: require("./modules/droid-game"),
    getDiscordIDFromID: require("./modules/get-discord-id-from-id"),
    ms: require("./modules/parse-time")
}