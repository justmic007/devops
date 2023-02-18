Last login: Sat Jan 28 21: 31: 22 on ttys002
micah @Micahs-MBP darey.io % ssh - i "practice-server-ec2-keypair.pem" ubuntu @ec2-34 - 207 - 188 - 95.compute - 1.amazonaws.com

Welcome to Ubuntu 22.04.1 LTS(GNU / Linux 5.15.0 - 1028 - aws x86_64)

  * Documentation: https://help.ubuntu.com
 * Management: https://landscape.canonical.com
 * Support: https://ubuntu.com/advantage

  System information as of Mon Feb 13 15: 32: 48 UTC 2023

  System load: 0.0               Processes: 97
  Usage of /: 27.5 % of 7.57GB   Users logged in: 0
  Memory usage: 23 % IPv4 address for eth0: 172.31.55.114
  Swap usage: 0 %

 * Ubuntu Pro delivers the most comprehensive open source security and
   compliance features.

  https://ubuntu.com/aws/pro

 * Introducing Expanded Security Maintenance for Applications.
   Receive updates to over 25, 000 software packages with your
   Ubuntu Pro subscription.Free for personal use.

  https://ubuntu.com/aws/pro

Expanded Security Maintenance for Applications is not enabled.

0 updates can be applied immediately.

Enable ESM Apps to receive additional future security updates.
See https://ubuntu.com/esm or run: sudo pro status


Last login: Mon Feb 13 09: 37: 12 2023 from 102.89.42.52
ubuntu @ip-172 - 31 - 55 - 114: ~$ node index.js
node: internal / modules / cjs / loader: 1050
throw err;
  ^

  Error: Cannot find module '/home/ubuntu/index.js'
    at Module._resolveFilename(node: internal / modules / cjs / loader: 1047: 15)
    at Module._load(node: internal / modules / cjs / loader: 893: 27)
    at Function.executeUserEntryPoint[as runMain](node: internal/modules/run_main: 81: 12)
    at node: internal / main / run_main_module: 23: 47 {
  code: 'MODULE_NOT_FOUND',
    requireStack: []
}

Node.js v18.14.0
ubuntu @ip-172 - 31 - 55 - 114: ~$ cd Todo /
  ubuntu@ip-172 - 31 - 55 - 114: ~/Todo$ node index.js
    (node: 2568)[MONGOOSE] DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7. Use `mongoose.set('strictQuery', false);` if you want to prepare for this change.Or use`mongoose.set('strictQuery', true);` to suppress this warning.
(Use`node --trace-deprecation ...` to show where the warning was created)
Server running on port 5000
MongooseServerSelectionError: Could not connect to any servers in your MongoDB Atlas cluster.One common reason is that you're trying to access the database from an IP that isn't whitelisted.Make sure your current IP address is on your Atlas cluster's IP whitelist: https://docs.atlas.mongodb.com/security-whitelist/
    at Connection.openUri(/home/ubuntu / Todo / node_modules / mongoose / lib / connection.js: 825: 32)
at / home / ubuntu / Todo / node_modules / mongoose / lib / index.js: 411: 10
at / home / ubuntu / Todo / node_modules / mongoose / lib / helpers / promiseOrCallback.js: 41: 5
    at new Promise(<anonymous>)
  at promiseOrCallback (/home/ubuntu/Todo/node_modules/mongoose/lib/helpers/promiseOrCallback.js:40:10)
  at Mongoose._promiseOrCallback (/home/ubuntu/Todo/node_modules/mongoose/lib/index.js:1285:10)
  at Mongoose.connect (/home/ubuntu/Todo/node_modules/mongoose/lib/index.js:410:20)
  at Object.<anonymous> (/home/ubuntu/Todo/index.js:13:10)
    at Module._compile (node:internal/modules/cjs/loader:1226:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1280:10) {
      reason: TopologyDescription {
      type: 'Unknown',
    servers: Map(1) {
      'dareycluster.cu0s1ly.mongodb.net:27017' => [ServerDescription]
    },
    stale: false,
    compatible: true,
    heartbeatFrequencyMS: 10000,
    localThresholdMS: 15,
    setName: null,
    maxElectionId: null,
    maxSetVersion: null,
    commonWireVersion: 0,
    logicalSessionTimeoutMinutes: null
  },
    code: undefined
}
    ^C
    ubuntu@ip-172-31-55-114:~/Todo$ sudo apt-get install --only-upgrade mongodb-atlas
    Reading package lists... Done
    Building dependency tree... Done
    Reading state information... Done
    E: Unable to locate package mongodb-atlas
    ubuntu@ip-172-31-55-114:~/Todo$ sudo apt-get install gnupg
    Reading package lists... Done
    Building dependency tree... Done
    Reading state information... Done
    gnupg is already the newest version (2.2.27-3ubuntu2.1).
    gnupg set to manually installed.
    0 upgraded, 0 newly installed, 0 to remove and 3 not upgraded.
    ubuntu@ip-172-31-55-114:~/Todo$ wget -qO - https://pgp.mongodb.com/server-6.0.asc | sudo apt-key add -
    Warning: apt-key is deprecated. Manage keyring files in trusted.gpg.d instead (see apt-key(8)).
    OK
    ubuntu@ip-172-31-55-114:~/Todo$ mongodb -version
    mongodb: command not found
    ubuntu@ip-172-31-55-114:~/Todo$ mongod --version
    mongod: command not found
    ubuntu@ip-172-31-55-114:~/Todo$ mongo --version
    Command 'mongo' not found, did you mean:
    command 'mono' from deb mono-runtime (6.8.0.105+dfsg-3.2)
    Try: sudo apt install <deb name>
      ubuntu@ip-172-31-55-114:~/Todo$ echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.com/apt/ubuntu jammy/mongodb-enterprise/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-enterprise.list
      deb [ arch=amd64,arm64 ] https://repo.mongodb.com/apt/ubuntu jammy/mongodb-enterprise/5.0 multiverse
      ubuntu@ip-172-31-55-114:~/Todo$ sudo apt-get update
      Hit:1 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy InRelease
      Hit:2 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy-updates InRelease
      Hit:3 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy-backports InRelease
      Hit:4 https://deb.nodesource.com/node_18.x jammy InRelease
      Hit:5 http://security.ubuntu.com/ubuntu jammy-security InRelease
      Ign:6 https://repo.mongodb.com/apt/ubuntu jammy/mongodb-enterprise/5.0 InRelease
      Get:7 https://repo.mongodb.com/apt/ubuntu jammy/mongodb-enterprise/5.0 Release [4081 B]
      Get:8 https://repo.mongodb.com/apt/ubuntu jammy/mongodb-enterprise/5.0 Release.gpg [801 B]
      Ign:8 https://repo.mongodb.com/apt/ubuntu jammy/mongodb-enterprise/5.0 Release.gpg
      Reading package lists... Done
      W: GPG error: https://repo.mongodb.com/apt/ubuntu jammy/mongodb-enterprise/5.0 Release: The following signatures couldn't be verified because the public key is not available: NO_PUBKEY B00A0BD1E2C63C11
      E: The repository 'https://repo.mongodb.com/apt/ubuntu jammy/mongodb-enterprise/5.0 Release' is not signed.
      N: Updating from such a repository can't be done securely, and is therefore disabled by default.
      N: See apt-secure(8) manpage for repository creation and user configuration details.
      ubuntu@ip-172-31-55-114:~/Todo$ echo "deb http://security.ubuntu.com/ubuntu focal-security main" | sudo tee /etc/apt/sources.list.d/focal-security.list
      deb http://security.ubuntu.com/ubuntu focal-security main
      ubuntu@ip-172-31-55-114:~/Todo$ echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.com/apt/ubuntu jammy/mongodb-enterprise/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-enterprise.list
      deb [ arch=amd64,arm64 ] https://repo.mongodb.com/apt/ubuntu jammy/mongodb-enterprise/5.0 multiverse
      ubuntu@ip-172-31-55-114:~/Todo$ sudo apt-get update
      Hit:1 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy InRelease
      Hit:2 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy-updates InRelease
      Hit:3 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy-backports InRelease
      Hit:4 https://deb.nodesource.com/node_18.x jammy InRelease
      Ign:5 https://repo.mongodb.com/apt/ubuntu jammy/mongodb-enterprise/5.0 InRelease
      Hit:6 http://security.ubuntu.com/ubuntu jammy-security InRelease
      Get:7 https://repo.mongodb.com/apt/ubuntu jammy/mongodb-enterprise/5.0 Release [4081 B]
      Get:8 http://security.ubuntu.com/ubuntu focal-security InRelease [114 kB]
      Get:9 https://repo.mongodb.com/apt/ubuntu jammy/mongodb-enterprise/5.0 Release.gpg [801 B]
      Ign:9 https://repo.mongodb.com/apt/ubuntu jammy/mongodb-enterprise/5.0 Release.gpg
      Get:10 http://security.ubuntu.com/ubuntu focal-security/main amd64 Packages [1993 kB]
      Get:11 http://security.ubuntu.com/ubuntu focal-security/main Translation-en [326 kB]
      Get:12 http://security.ubuntu.com/ubuntu focal-security/main amd64 c-n-f Metadata [12.2 kB]
      Reading package lists... Done
      W: GPG error: https://repo.mongodb.com/apt/ubuntu jammy/mongodb-enterprise/5.0 Release: The following signatures couldn't be verified because the public key is not available: NO_PUBKEY B00A0BD1E2C63C11
      E: The repository 'https://repo.mongodb.com/apt/ubuntu jammy/mongodb-enterprise/5.0 Release' is not signed.
      N: Updating from such a repository can't be done securely, and is therefore disabled by default.
      N: See apt-secure(8) manpage for repository creation and user configuration details.
      ubuntu@ip-172-31-55-114:~/Todo$ sudo apt-get install -y mongodb-atlas
      Reading package lists... Done
      Building dependency tree... Done
      Reading state information... Done
      E: Unable to locate package mongodb-atlas
      ubuntu@ip-172-31-55-114:~/Todo$ wget -qO - https://pgp.mongodb.com/server-6.0.asc | sudo apt-key add -
      Warning: apt-key is deprecated. Manage keyring files in trusted.gpg.d instead (see apt-key(8)).
      OK
      ubuntu@ip-172-31-55-114:~/Todo$ wget -qO - https://pgp.mongodb.com/server-5.0.asc | sudo apt-key add -
      Warning: apt-key is deprecated. Manage keyring files in trusted.gpg.d instead (see apt-key(8)).
      OK
      ubuntu@ip-172-31-55-114:~/Todo$ echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.com/apt/ubuntu jammy/mongodb-enterprise/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-enterprise.list
      deb [ arch=amd64,arm64 ] https://repo.mongodb.com/apt/ubuntu jammy/mongodb-enterprise/5.0 multiverse
      ubuntu@ip-172-31-55-114:~/Todo$ sudo apt-get update
      Hit:1 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy InRelease
      Hit:2 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy-updates InRelease
      Hit:3 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy-backports InRelease
      Hit:4 http://security.ubuntu.com/ubuntu jammy-security InRelease
      Hit:5 http://security.ubuntu.com/ubuntu focal-security InRelease
      Hit:6 https://deb.nodesource.com/node_18.x jammy InRelease
      Ign:7 https://repo.mongodb.com/apt/ubuntu jammy/mongodb-enterprise/5.0 InRelease
      Get:8 https://repo.mongodb.com/apt/ubuntu jammy/mongodb-enterprise/5.0 Release [4081 B]
      Get:9 https://repo.mongodb.com/apt/ubuntu jammy/mongodb-enterprise/5.0 Release.gpg [801 B]
      Get:10 https://repo.mongodb.com/apt/ubuntu jammy/mongodb-enterprise/5.0/multiverse amd64 Packages [5695 B]
      Get:11 https://repo.mongodb.com/apt/ubuntu jammy/mongodb-enterprise/5.0/multiverse arm64 Packages [4526 B]
      Fetched 15.1 kB in 1s (12.0 kB/s)
      Reading package lists... Done
      W: https://repo.mongodb.com/apt/ubuntu/dists/jammy/mongodb-enterprise/5.0/Release.gpg: Key is stored in legacy trusted.gpg keyring (/etc/apt/trusted.gpg), see the DEPRECATION section in apt-key(8) for details.
      ubuntu@ip-172-31-55-114:~/Todo$ sudo apt-get update
      Hit:1 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy InRelease
      Hit:2 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy-updates InRelease
      Get:3 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy-backports InRelease [107 kB]
      Hit:4 https://deb.nodesource.com/node_18.x jammy InRelease
      Ign:5 https://repo.mongodb.com/apt/ubuntu jammy/mongodb-enterprise/5.0 InRelease
      Hit:6 http://security.ubuntu.com/ubuntu jammy-security InRelease
      Hit:7 https://repo.mongodb.com/apt/ubuntu jammy/mongodb-enterprise/5.0 Release
      Hit:8 http://security.ubuntu.com/ubuntu focal-security InRelease
      Fetched 107 kB in 1s (97.4 kB/s)
      Reading package lists... Done
      W: https://repo.mongodb.com/apt/ubuntu/dists/jammy/mongodb-enterprise/5.0/Release.gpg: Key is stored in legacy trusted.gpg keyring (/etc/apt/trusted.gpg), see the DEPRECATION section in apt-key(8) for details.
      ubuntu@ip-172-31-55-114:~/Todo$ sudo apt-get install -y mongodb-atlas
      Reading package lists... Done
      Building dependency tree... Done
      Reading state information... Done
      The following additional packages will be installed:
      mongodb-atlas-cli mongodb-mongosh
      The following NEW packages will be installed:
      mongodb-atlas mongodb-atlas-cli mongodb-mongosh
      0 upgraded, 3 newly installed, 0 to remove and 3 not upgraded.
      Need to get 56.6 MB of archives.
      After this operation, 226 MB of additional disk space will be used.
      Get:1 https://repo.mongodb.com/apt/ubuntu jammy/mongodb-enterprise/5.0/multiverse amd64 mongodb-atlas-cli amd64 1.5.0 [15.3 MB]
      Get:2 https://repo.mongodb.com/apt/ubuntu jammy/mongodb-enterprise/5.0/multiverse amd64 mongodb-mongosh amd64 1.7.0 [41.3 MB]
      Get:3 https://repo.mongodb.com/apt/ubuntu jammy/mongodb-enterprise/5.0/multiverse amd64 mongodb-atlas amd64 1.5.0 [616 B]
      Fetched 56.6 MB in 1s (48.6 MB/s)
      Selecting previously unselected package mongodb-atlas-cli.
      (Reading database ... 68922 files and directories currently installed.)
      Preparing to unpack .../mongodb-atlas-cli_1.5.0_amd64.deb ...
      Unpacking mongodb-atlas-cli (1.5.0) ...
      Selecting previously unselected package mongodb-mongosh.
      Preparing to unpack .../mongodb-mongosh_1.7.0_amd64.deb ...
      Unpacking mongodb-mongosh (1.7.0) ...
      Selecting previously unselected package mongodb-atlas.
      Preparing to unpack .../mongodb-atlas_1.5.0_amd64.deb ...
      Unpacking mongodb-atlas (1.5.0) ...
      Setting up mongodb-mongosh (1.7.0) ...
      Setting up mongodb-atlas-cli (1.5.0) ...
      Setting up mongodb-atlas (1.5.0) ...
      Processing triggers for man-db (2.10.2-1) ...
      Scanning processes...
      Scanning linux images...

      Running kernel seems to be up-to-date.

      No services need to be restarted.

      No containers need to be restarted.

      No user sessions are running outdated binaries.

      No VM guests are running outdated hypervisor (qemu) binaries on this host.
      ubuntu@ip-172-31-55-114:~/Todo$ atlas
      Use atlas command help for information on a specific command

      Usage:
      atlas [command]

      Aliases:
      atlas, atlascli

      Examples:

      # Display the help menu for the config command
      atlas config --help

      Available Commands:
      config             Configure and manage your user profiles.
      auth               Manage the CLI's authentication state.
      quickstart         Create, configure, and connect to an Atlas cluster for your project.
      setup              Register, authenticate, create, and access an Atlas cluster.
      projects           Manage your Atlas projects.
      organizations      Manage your Atlas organizations.
      users              Manage your Atlas users.
      teams              Manage your Atlas teams.
      clusters           Manage clusters for your project.
      dbusers            Manage database users for your project.
      customDbRoles      Manage custom database roles for your project.
      accessLists        Manage the list of IP addresses that can access your Atlas project.
      dataLakes          Manage Atlas Data Lakes for your project.
      alerts             Manage alerts for your project.
      backups            Manage cloud backups for your project.
      events             Manage events for your organization or project.
      metrics            Get metrics on the MongoDB process.
      performanceAdvisor Learn more about slow queries and get suggestions to improve database performance.
      logs               Download host logs for your project.
      processes          Manage MongoDB processes for your project.
      privateEndpoints   Manage Atlas private endpoints.
      networking         Manage or configure network peering for your Atlas project.
      security           Manage security configuration for your project.
      integrations       Configure third-party integrations for your Atlas project.
      maintenanceWindows Manage Atlas maintenance windows.
      customDns          Manage DNS configuration of Atlas project’s clusters deployed to AWS.
      cloudProviders     Manage cloud provider access in Atlas using AWS IAM roles.
      serverless         Manage serverless instances for your project.
      liveMigrations     Manage a Live Migration to Atlas for your organization.
      accessLogs         Return the access logs for a cluster.
      kubernetes         Manage kubernetes resources.
      help               Help about any command
      completion         Generate the autocompletion script for the specified shell

      Flags:
      -h, --help             help for atlas
      -P, --profile string   Human-readable label that identifies the profile to use from your configuration file. To learn about profiles for the Atlas CLI, see https://dochub.mongodb.org/core/atlas-cli-save-connection-settings. To learn about profiles for MongoCLI, see https://dochub.mongodb.org/core/atlas-cli-configuration-file.
      -v, --version          version for atlas

      Use "atlas [command] --help" for more information about a command.
      ubuntu@ip-172-31-55-114:~/Todo$ atlas --version
      atlascli version: 1.5.0
      git version: a3d64fc13b7ec5742f5b325f32eaf53a4cc0447a
      Go version: go1.19.3
      os: linux
      arch: amd64
      compiler: gc
      ubuntu@ip-172-31-55-114:~/Todo$ sudo apt-get install --only-upgrade mongodb-atlas
      Reading package lists... Done
      Building dependency tree... Done
      Reading state information... Done
      mongodb-atlas is already the newest version (1.5.0).
      0 upgraded, 0 newly installed, 0 to remove and 3 not upgraded.
      ubuntu@ip-172-31-55-114:~/Todo$ atlas accessLists describe 192.0.2.0/24 --output json --projectId 63e96aa0eb7f6f50d2ffc3e5
      Error: this action requires authentication

      To log in using your Atlas username and password, run: atlas auth login
      To set credentials using API keys, run: atlas config init
      ubuntu@ip-172-31-55-114:~/Todo$ atlas auth login

      To verify your account, copy your one-time verification code:
      M9K4-GGG6

      Paste the code in the browser when prompted to activate your Atlas CLI. Your code will expire after 10 minutes.

      To continue, go to https://account.mongodb.com/account/connect
      There was an issue opening your browser
      Successfully logged in as micahoghale@gmail.com.
      ubuntu@ip-172-31-55-114:~/Todo$ atlas accessLists describe 192.0.2.0/24 --output json --projectId 63e96aa0eb7f6f50d2ffc3e5
      Error: GET https://cloud.mongodb.com/api/atlas/v1.0/groups/63e96aa0eb7f6f50d2ffc3e5/accessList/192.0.2.0%2F24: 404 (request "ATLAS_NETWORK_PERMISSION_ENTRY_NOT_FOUND") IP Address 192.0.2.0/24 not on Atlas access list for group 63e96aa0eb7f6f50d2ffc3e5.
      ubuntu@ip-172-31-55-114:~/Todo$ atlas accessLists describe 0.0.0.0/0 --output json --projectId 63e96aa0eb7f6f50d2ffc3e5
      {
        "cidrBlock": "0.0.0.0/0",
      "comment": "Connect from anywhere",
      "deleteAfterDate": "2023-02-20T12:17:38Z",
      "groupId": "63e96aa0eb7f6f50d2ffc3e5"
}
      ubuntu@ip-172-31-55-114:~/Todo$ node index.js
      (node:5456) [MONGOOSE] DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7. Use `mongoose.set('strictQuery', false);` if you want to prepare for this change. Or use `mongoose.set('strictQuery', true);` to suppress this warning.
      (Use `node --trace-deprecation ...` to show where the warning was created)
      Server running on port 5000
      MongooseServerSelectionError: Could not connect to any servers in your MongoDB Atlas cluster. One common reason is that you're trying to access the database from an IP that isn't whitelisted. Make sure your current IP address is on your Atlas cluster's IP whitelist: https://docs.atlas.mongodb.com/security-whitelist/
      at Connection.openUri (/home/ubuntu/Todo/node_modules/mongoose/lib/connection.js:825:32)
      at /home/ubuntu/Todo/node_modules/mongoose/lib/index.js:411:10
      at /home/ubuntu/Todo/node_modules/mongoose/lib/helpers/promiseOrCallback.js:41:5
      at new Promise (<anonymous>)
        at promiseOrCallback (/home/ubuntu/Todo/node_modules/mongoose/lib/helpers/promiseOrCallback.js:40:10)
        at Mongoose._promiseOrCallback (/home/ubuntu/Todo/node_modules/mongoose/lib/index.js:1285:10)
        at Mongoose.connect (/home/ubuntu/Todo/node_modules/mongoose/lib/index.js:410:20)
        at Object.<anonymous> (/home/ubuntu/Todo/index.js:13:10)
          at Module._compile (node:internal/modules/cjs/loader:1226:14)
          at Module._extensions..js (node:internal/modules/cjs/loader:1280:10) {
            reason: TopologyDescription {
            type: 'Unknown',
          servers: Map(1) {
            'dareycluster.cu0s1ly.mongodb.net:27017' => [ServerDescription]
    },
          stale: false,
          compatible: true,
          heartbeatFrequencyMS: 10000,
          localThresholdMS: 15,
          setName: null,
          maxElectionId: null,
          maxSetVersion: null,
          commonWireVersion: 0,
          logicalSessionTimeoutMinutes: null
  },
          code: undefined
}
          ^C
          ubuntu@ip-172-31-55-114:~/Todo$ atlas accessLists delete 0.0.0.0/0 --projectId 63e96aa0eb7f6f50d2ffc3e5 --force

          Project access list entry '0.0.0.0/0' deleted
          ubuntu@ip-172-31-55-114:~/Todo$ atlas accessLists describe 0.0.0.0/0 --output json --projectId 63e96aa0eb7f6f50d2ffc3e5
          Error: GET https://cloud.mongodb.com/api/atlas/v1.0/groups/63e96aa0eb7f6f50d2ffc3e5/accessList/0.0.0.0%2F0: 404 (request "ATLAS_NETWORK_PERMISSION_ENTRY_NOT_FOUND") IP Address 0.0.0.0/0 not on Atlas access list for group 63e96aa0eb7f6f50d2ffc3e5.
          ubuntu@ip-172-31-55-114:~/Todo$ atlas accessLists create 0.0.0.0/0 --type cidrBlock --projectId 63e96aa0eb7f6f50d2ffc3e5 --output json --comment "Connect from Anywhere"
          {
            "links": [
          {
            "rel": "self",
          "href": "https://cloud.mongodb.com/api/atlas/v1.0/groups/63e96aa0eb7f6f50d2ffc3e5/accessList?pageNum=1\u0026itemsPerPage=100"
    }
          ],
          "results": [
          {
            "cidrBlock": "0.0.0.0/0",
          "comment": "Connect from Anywhere",
          "groupId": "63e96aa0eb7f6f50d2ffc3e5"
    }
          ],
          "totalCount": 1
}
          ubuntu@ip-172-31-55-114:~/Todo$ node index.js
          (node:5495) [MONGOOSE] DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7. Use `mongoose.set('strictQuery', false);` if you want to prepare for this change. Or use `mongoose.set('strictQuery', true);` to suppress this warning.
          (Use `node --trace-deprecation ...` to show where the warning was created)
          Server running on port 5000
          MongooseServerSelectionError: Could not connect to any servers in your MongoDB Atlas cluster. One common reason is that you're trying to access the database from an IP that isn't whitelisted. Make sure your current IP address is on your Atlas cluster's IP whitelist: https://docs.atlas.mongodb.com/security-whitelist/
          at Connection.openUri (/home/ubuntu/Todo/node_modules/mongoose/lib/connection.js:825:32)
          at /home/ubuntu/Todo/node_modules/mongoose/lib/index.js:411:10
          at /home/ubuntu/Todo/node_modules/mongoose/lib/helpers/promiseOrCallback.js:41:5
          at new Promise (<anonymous>)
            at promiseOrCallback (/home/ubuntu/Todo/node_modules/mongoose/lib/helpers/promiseOrCallback.js:40:10)
            at Mongoose._promiseOrCallback (/home/ubuntu/Todo/node_modules/mongoose/lib/index.js:1285:10)
            at Mongoose.connect (/home/ubuntu/Todo/node_modules/mongoose/lib/index.js:410:20)
            at Object.<anonymous> (/home/ubuntu/Todo/index.js:13:10)
              at Module._compile (node:internal/modules/cjs/loader:1226:14)
              at Module._extensions..js (node:internal/modules/cjs/loader:1280:10) {
                reason: TopologyDescription {
                type: 'Unknown',
              servers: Map(1) {
                'dareycluster.cu0s1ly.mongodb.net:27017' => [ServerDescription]
    },
              stale: false,
              compatible: true,
              heartbeatFrequencyMS: 10000,
              localThresholdMS: 15,
              setName: null,
              maxElectionId: null,
              maxSetVersion: null,
              commonWireVersion: 0,
              logicalSessionTimeoutMinutes: null
  },
              code: undefined
}
