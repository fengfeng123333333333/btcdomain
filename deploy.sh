#!/bin/bash

rm dist.tar.gz

echo "remove old tar file ok."

npm install

npm run build

echo "build ok."

tar -czvf dist.tar.gz dist

scp -i ~/.ssh/bitcoin.pem dist.tar.gz ubuntu@54.234.246.200:/home/ubuntu

echo "upload finished!"