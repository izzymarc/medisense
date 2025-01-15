#!/bin/bash

# Install TypeScript globally if not already installed
echo "Installing TypeScript globally..."
npm install -g typescript

# Compile the Firebase TypeScript file into JavaScript
echo "Compiling TypeScript Firebase file to JavaScript..."
npx tsc /home/ec2-user/medisense/src/firebase.ts --outDir /home/ec2-user/medisense/src

# Check if dotenv is installed, if not install it
if ! npm list dotenv >/dev/null 2>&1; then
  echo "Installing dotenv package..."
  npm install dotenv
fi

# Modify firebase.ts to use dotenv and process.env
echo "Updating Firebase configuration to use dotenv and process.env..."
sed -i '1i import { config } from "dotenv";\nconfig();' /home/ec2-user/medisense/src/firebase.ts
sed -i 's/import.meta.env/process.env/g' /home/ec2-user/medisense/src/firebase.ts

# Update imports in backend routes to reference the compiled Firebase JavaScript file
echo "Updating backend routes to reference compiled Firebase file..."
sed -i 's#../../src/firebase#../../src/firebase.js#g' /home/ec2-user/medisense/server/routes/profile.js

# Restart the server
echo "Restarting the server..."
cd /home/ec2-user/medisense/server
node index.js
