const readline = require("readline");
const fs = require("fs");

// create an instance of readline and configure the readable and writable streams
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// use the rl.question method to output questions on the CLI to the user
rl.question("Project Title", (title) => {
  fs.appendFile(
    "README.md",
    "$ Project Title" + "\n" + "\n" + "#" + title,
    (err) => {
      if (err) throw err;
    }
  );
  rl.question("Getting Started", (gettingStarted) => {
    fs.appendFile(
      "README.md",
      "\n" + "\n" + "$ Getting Started" + "\n" + "\n" + gettingStarted,
      (err) => {
        if (err) throw err;
      }
    );
    rl.question(
      "What you need to install the software and how to install them",
      (perequisites) => {
        fs.appendFile(
          "README.md",
          "\n" + "\n" + "$ Perequisites" + "\n" + "\n" + perequisites,
          (err) => {
            if (err) throw err;
          }
        );
        rl.question("installation istruction", (instalation) => {
          fs.appendFile(
            "README.md",
            "\n" + "\n" + "$ Instalation" + "\n" + "\n" + instalation + "\n",
            (err) => {
              if (err) throw err;
            }
          );
          rl.question("Running the test", (testRunning) => {
            fs.appendFile(
              "README.md",
              "\n" + "\n" + "$ Running the Tests" + "\n" + "\n" + testRunning,
              (err) => {
                if (err) throw err;
              }
            );
            rl.question("End to end test break down", (testBreakdown) => {
              fs.appendFile(
                "README.md",
                "\n" +
                  "\n" +
                  "$ Break down int End to End test" +
                  "\n" +
                  "\n" +
                  testBreakdown,
                (err) => {
                  if (err) throw err;
                }
              );
              rl.question("Coding style test", (codingTest) => {
                fs.appendFile(
                  "README.md",
                  "\n" +
                    "\n" +
                    "$ Add Coding style tests" +
                    "\n" +
                    "\n" +
                    codingTest,
                  (err) => {
                    if (err) throw err;
                  }
                );
                rl.question(
                  "Add additional notes about how to deploy this on a live system",
                  (deployment) => {
                    fs.appendFile(
                      "README.md",
                      "\n" + "\n" + "$ Deployment" + "\n" + "\n" + deployment,
                      (err) => {
                        if (err) throw err;
                      }
                    );
                    rl.question("Contribution instruction", (contribution) => {
                      fs.appendFile(
                        "README.md",
                        "\n" +
                          "\n" +
                          "$ Contribution" +
                          "\n" +
                          "\n" +
                          contribution,
                        (err) => {
                          if (err) throw err;
                        }
                      );
                      rl.question("versioning instructions", (versioning) => {
                        fs.appendFile(
                          "README.md",
                          "\n" +
                            "\n" +
                            "$ Versioning" +
                            "\n" +
                            "\n" +
                            versioning,
                          (err) => {
                            if (err) throw err;
                          }
                        );
                        rl.question("List of authors", (authors) => {
                          fs.appendFile(
                            "README.md",
                            "\n" + "\n" + "$ Authors" + "\n" + "\n" + authors,
                            (err) => {
                              if (err) throw err;
                            }
                          );
                          rl.question(
                            "List licensing body/bodies",
                            (license) => {
                              fs.appendFile(
                                "README.md",
                                "\n" +
                                  "\n" +
                                  "$ License" +
                                  "\n" +
                                  "\n" +
                                  license,
                                (err) => {
                                  if (err) throw err;
                                }
                              );
                              rl.question(
                                "write acknowledgments",
                                (acknowledgment) => {
                                  fs.appendFile(
                                    "README.md",
                                    "\n" +
                                      "\n" +
                                      "$ Acknowledgement" +
                                      "\n" +
                                      "\n" +
                                      acknowledgment,
                                    (err) => {
                                      if (err) throw err;
                                      console.log("saved!");
                                      rl.close();
                                    }
                                  );
                                }
                              );
                            }
                          );
                        });
                      });
                    });
                  }
                );
              });
            });
          });
        });
      }
    );
  });
});
// event to run when the operqation closes

rl.on("close", () => {
  console.log("\n README FILE GENERATED!!!");
  process.exit(0);
});
