## Solution to Aux Project: Shell Scripting


- Create the server to onboard users on and set permission of the `.pem` key downloaded to `600 `using the command eg `sudo chmod 600 sample.pem`
- If the script written is on local machine, use the `scp` command to copy it to the server using the private key downloaded for the instance. Make sure you navigate to the location of the script and use the following command
```
	scp -i <the private key name.pem> <name of script file> user@public-ip:<path-on-server>;
	eg  scp -i private_key.pem onboard.sh ubuntu@3.3.3.3:~/;
```

- Connect to the server either by `SSH client` or `EC2 Instance Connect`.
- Clear the screen with clear
- List the contents in that home path with this command -->  `ls -l` and you will see the file `onboard.sh` copied to that path
- Create the Shell directory using `mkdir Shell` and copy the `onboard.sh` file to it by going to the directory where the `onboard.sh` file is, running the command `mv onboard.sh /home/ubuntu/Shell/`
- Confirm that the `onboard.sh` file in now in the path `/home/ubuntu/Shell/ `
- Create the necessary files with the command  `touch id_rsa id_rsa.pub names.csv`
- Run `vi id_rsa.pub `and populate the file with the public key content in the documentation and save using `:wqa!`
- Run `vi id_rsa` and populate the file with the private key content in the documentation and save using `:wqa!`
- Run `vi names.csv` and populate the file with some names and save using `:wqa!`
- Update the `onboard.sh` file with the right path to the location of public and private key files by first checking the path to the files with pwd and copy the path
- Update the line that has the path to the `id_rsa.pub` to ie `/home/ubuntu/Shell/id_rsa.pub` and save the file

- Also create the  `developers` group by running the command `sudo groupadd developers`
- Make the `onboard.sh` files executable by running the command `sudo chmod +x onboard.sh` in the path to the file
- Test run the script without the sudo privilege using `./onboard.sh` and you should get the response `"Only Admin can onboard a user"`
- Switch to a super user using the command `sudo su` and you should have a root with the path eg `root@ip-3.3.3.3:/home/ubuntu/Shell#`
- Then run the script again using `./onboard.sh` and should be successful
- Still as a root user on the path eg `root@ip-3.3.3.3:/home/ubuntu/Shell# `, run `ls -l /home` to see the list of users that has been created
- Confirm that the `developers` group has been created by running the command `getent group developers`. You should see this `developers:x:1001:`
- Also run the command `cat /etc/passwd` to display all the `users` created inside the `developers` group. You can also filter/analyse the output better using the `awk` command ie `cat /etc/passwd | awk -F':' '{ print $1}' | xargs -n1 groups`
- Next test the new users created by connecting to the server using ``ssh` command and the `private` key
- Go to the local machine download directory. To connect, you should have the private key or must have been given the private key as a developer. `In summary, to connect to a server, you need a private key.` Also note that in our script, we have copied over to the `server(authorized_keys)`, the public key that the private key recognize
- If the file is not sent and you are copying the recognized private key file from somewhere, then create a file eg `aux-project.pem` file and copy from the docs and `paste the private key in the file and save`
- Check the permissions on the `.pem` file by running the command `ls -l | grep aux-project.pem` and protect the `.pem` file by running the command `sudo chmod 600 aux-project.pem` or as the case maybe
- Check the permissions on the .pem file by running the command `ls -l | grep aux-project.pem` again. This time the permission should be `-rw-----------` instead of the previous `-rw-rw-r----`
- Then connect using the `.pem` file created eg `ssh -i aux-project.pem ben@3.3.3.3`
- If everything is successful, we should have `ben@ip-3.3.3.3`
- We can check if the user we created has a sudo privilege by running the command `sudo apt update` and use the password given in the script file. This should return an error  that `ben is not in the sudoers file`. It is important to check the permissions given to a user so that they don't mess up the server configurations
- Run `ls -la` to see the files ben has access to
- Run `ls -la .ssh/`to see the content of the folder
- Exit and connect as another user to see that he ONLY has same privilege as others created using the script file

#
### Link to the Demo Video
https://drive.google.com/file/d/13EoD7Dft-61095LIYV5HIoStDvjVI-9s/view?usp=sharing
