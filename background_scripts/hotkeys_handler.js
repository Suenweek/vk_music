var gettingAllCommands = browser.commands.getAll();
gettingAllCommands.then(
    (commands) => {
        for (command of commands) {
            console.log(command);
        }
    }
);

browser.commands.onCommand.addListener(
    (command) => {
        // Getting vk tab
        var getting_vk_tab = browser.tabs.query(
          {
            url: "*://*.vk.com/*"
          }
        );

        // Executing
        getting_vk_tab.then(
            (tabs) => {
                browser.tabs.executeScript(
                    tabs[0].id, { 
                        file: "/content_scripts/" + command + ".js"
                    }
                );
            }
        );
    }
);