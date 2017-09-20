#!/bin/bash

x=1 # number of current file to download

for mp4URL in $(node get-fakty-mp4-urls.js)
do
  echo; echo "---------------";
  wget -O "$x.mp4" $mp4URL;
  ((x++));
done
