console.log(process.argv.slice(2));

const Commands = {
    GENERATE: ["generate", "gen"]
}


if (Commands.GENERATE.includes("gen")) console.log("valid command")