# BEGIN ANSIBLE DEVELOPMENT

1. In your `ansible-config-mgt` GitHub repository, create a new branch that will be used for development of a new feature.
***Tip:*** Give your branches descriptive and comprehensive names, for example, if you use [Jira](https://www.atlassian.com/software/jira) or [Trello](https://trello.com/) as a project management tool – include ticket number (e.g. `PRJ-145`) in the name of your branch and add a topic and a brief description what this branch is about – a `bugfix`, `hotfix`, `feature`, `release` (e.g. `feature/prj-145-lvm`)

2. Checkout the newly created feature branch to your local machine and start building your code and directory structure

3. Create a directory and name it `playbooks` – it will be used to store all your playbook files.

4. Create a directory and name it `inventory` – it will be used to keep your hosts organised.

5. Within the playbooks folder, create your first playbook, and name it `common.yml`

6. Within the inventory folder, create an inventory file (.yml) for each environment (Development, Staging Testing and Production) `dev`, `staging`, `uat`, and `prod` respectively.

## Step 4 – Set up an Ansible Inventory

An `Ansible inventory file` defines the hosts and groups of hosts upon which commands, modules, and tasks in a playbook operate. Since our intention is to execute Linux commands on remote hosts, and ensure that it is the intended configuration on a particular server that occurs. It is important to have a way to organize our hosts in such an Inventory.

Save below inventory structure in the `inventory/dev` file to start configuring your development servers. Ensure to replace the IP addresses according to your own setup.

***Note:*** Ansible uses TCP port 22 by default, which means it needs to `ssh` into target servers from `Jenkins-Ansible` host – for this you can implement the concept of [ssh-agent](https://smallstep.com/blog/ssh-agent-explained/#:~:text=ssh%2Dagent%20is%20a%20key,you%20connect%20to%20a%20server.&text=It%20doesn't%20allow%20your%20private%20keys%20to%20be%20exported.). Now you need to import your key into `ssh-agent`:

To learn how to setup SSH agent and connect VS Code to your Jenkins-Ansible instance, please see this video:

   - For Windows users – [ssh-agent on windows](https://youtu.be/OplGrY74qog)
   - For Linux users – [ssh-agent on linux](https://www.youtube.com/watch?v=RRRQLgAfcJw&t=0s)

Go to the directory on your local computer where you have your `.pem` key file that will be used to access the `Jenkins-Ansible` instance
```
    eval `ssh-agent -s`
    ssh-add <path-to-private-key>

```
Confirm the key has been persisted with the command below, you should see the name of your key. With this persistence of ssh key, ansible will be able to connect and create others instances using the this same key pair

```
    ssh-add -l // to add the key to the key chain

```

Now, ssh into your `Jenkins-Ansible` server using ssh-agent

```
    ssh -A ubuntu@public-ip

```
Persist the key on the `Jenkins-Ansible` server
```
    ssh-add -l

```

Test that you can `ssh` into the other instances using their `Private IPs`. ie, if ansible can access the other servers from the `Jenkins-Ansible` server

Also notice, that your Load Balancer user is `ubuntu` and user for RHEL-based servers is `ec2-user`.

Update your `inventory/dev.yml` file with this snippet of code: Note: if you do not have these servers launched, head to aws and launch them.

```
[nfs]
<NFS-Server-Private-IP-Address> ansible_ssh_user='ec2-user'

[webservers]
<Web-Server1-Private-IP-Address> ansible_ssh_user='ec2-user'
<Web-Server2-Private-IP-Address> ansible_ssh_user='ec2-user'

[db]
<Database-Private-IP-Address> ansible_ssh_user='ec2-user' 

[lb]
<Load-Balancer-Private-IP-Address> ansible_ssh_user='ubuntu'

```