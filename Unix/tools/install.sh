#!bin/env bash

cd ~
if [[ -d .CSI-WebApp-Template ]]
then
    rm -rf .CSI-WebApp-Template
fi
git clone https://github.com/csivitu/CSI-WebApp-Template.git --branch feat/unix --single-branch .CSI-WebApp-Template
cd .CSI-WebApp-Template/Unix
export CSIUnixDir=`pwd`
if [[ -f ~/.local/bin/csi-cli ]]
then
    rm ~/.local/bin/csi-cli
fi
cd tools
cat generate.sh > csi-cli
chmod +x csi-cli

if [[ ! -d ~/.local/bin ]]
then
    mkdir ~/.local/bin
    export PATH=$PATH:~/.local/bin
    echo
    echo "Please add ~/.local/bin to PATH permanently."
    echo
    echo "Modify PATH to:"
    echo
    echo $PATH
    echo
fi
cp csi-cli ~/.local/bin/
rm csi-cli
echo "Installation Complete."
