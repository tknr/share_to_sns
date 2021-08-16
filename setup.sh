#!/bin/bash
cd `dirname $0`

if !(type "npm" > /dev/null 2>&1); then
	if (type "dnf" > /dev/null 2>&1);then
		sudo dnf install npm -y || exit 1
	elif (type "yum" > /dev/null 2>&1);then
                sudo yum install npm -y || exit 1
	elif (type "apt" > /dev/null 2>&1);then
                sudo apt install npm -y || exit 1
        else
		exit 1
	fi
fi

npm install || exit 1
npm run update || exit 1

if !(type "brew" > /dev/null 2>&1); then
	/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)" || exit 1
fi

brew install webp || exit 1

npm run minify || exit 1
npm run git-push || exit 1
