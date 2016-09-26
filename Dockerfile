FROM debian:latest

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get -yq update && \
    apt-get -yq install python-software-properties software-properties-common \
                        git curl net-tools sudo bzip2 libpng-dev locales-all \
                        python g++ make ruby-compass libfreetype6

RUN curl -sL https://deb.nodesource.com/setup_0.12 | bash - && \
    apt-get -yq install nodejs ruby-compass

RUN npm install -g npm && \
    npm install -g bower grunt-cli

#RUN adduser --disabled-password --gecos "" app; \
#    echo "app ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers


#ENV HOME /app
#ENV LANG en_US.UTF-8

#RUN mkdir /app && chown app:app /app

#USER app
#RUN git config --global url."https://".insteadOf git://

EXPOSE 9000 35729

WORKDIR /app
CMD ["/bin/bash"]
