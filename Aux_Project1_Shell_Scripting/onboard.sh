# Shell Scripting
# This script will read a csv file that contains 20 new Linux users.
# This script will create each user on the server and add to an existing group called 'Developers'
# The script will first check for the existence of the user on the system, before it will attempt to create 
# The user that is being created also, must have a default home folder
# Each user should a .ssh folder within its HOME folder. If it does not, then it will be created
# For each user's SSH configuration, we will create an authorized_keys file and add the below public key


#!bin/bash
userfile=$(cat names.csv)
PASSWORD=password

# To ensure the user running this script has sudo privilege
    if [ $(id -u) -eq 0 ]; then

# Reading the CSV file
        for user in $userfile;
        do
            echo $user
        if id "$user" &>/dev/null
        then
            echo "User Exists"
        else

# This will create a new user
        useradd -m -d /home/$user -s /bin/bash -g developers $user
        echo "New User Created"
        echo

# This will create a ssh folder in the user home folder
        su - -c "mkdir ~/.ssh" $user
        echo ".ssh directory created for new user"
        echo

# We need to set the user permission for the ssh dir
        su - -c "chmod 700 ~/.ssh" $user
        echo "User permission for .ssh directory set"
        echo

# This will create an authorized_key file
        su - -c "touch ~/.ssh/authorized_keys" $user
        echo "Authorized Key File Created"
        echo

# We need to set permissions for the key file
        su - -c "chmod 600 ~/.ssh/authorized_keys" $user
        echo "User permission for the Authorized key file set"
        echo

# We need to create and set a public key for users in the server
        cp -R "/home/ubuntu/Shell/id_rsa.pub" "/home/$user/.ssh/authorized_keys"
        echo "Copied the Public Key to new user account on the server"
        echo
        echo

        echo "USER CREATED"

# Generate a password.
      sudo echo -e "$PASSWORD\n$PASSWORD" | sudo passwd "$user"
      sudo passwd -x 5 $user
        fi
      done
     else
     echo "Only Admin can Onboard a User"
     fi
