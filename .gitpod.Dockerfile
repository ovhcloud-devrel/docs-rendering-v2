FROM gitpod/workspace-python

RUN pyenv install 3.9.16 \
    && pyenv global 3.9.16
