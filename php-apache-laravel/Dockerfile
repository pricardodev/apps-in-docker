FROM php:7.4-apache
# 1. INSTALANDO OS PACOTES DE DESENVOLVIMENTO E LIMPANDO O CACHE DE INSTALAÇÃO.
RUN apt-get update && apt-get install -y \
    curl \
    g++ \
    git \
    libpq-dev \
    libbz2-dev \
    libfreetype6-dev \
    libicu-dev \
    libjpeg-dev \
    libmcrypt-dev \
    libpng-dev \
    libreadline-dev \
    sudo \
    unzip \
    zip \
 && rm -rf /var/lib/apt/lists/* 

USER root

# 2. ADICIONA EXTENÇÃO DO PDO PARA POSTGRES, SEM ELA NÃO TEM DRIVER PARA CONEXÃO COM BANCO
RUN docker-php-ext-install pdo_pgsql

# 3. CONFIGURANDO O APACHE PARA DOCUMENT ROOT SERA A PASTA PUBLIC DO LARAVEL
ENV APACHE_DOCUMENT_ROOT=/var/www/html/public
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

# 4. MÓDULO DE REESCRITA PARA A URL E .htaccess (Access-Control-Allow-Origin-)
RUN a2enmod rewrite headers

# 5. CONFIGURANDO O PHP.INI
RUN mv "$PHP_INI_DIR/php.ini-development" "$PHP_INI_DIR/php.ini"

# 6. INSTALANDO COMPOSER.
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# 7. SETANDO AS PERMISSÕES RECURSIVAS DA PASTA PARA ACESSO ROOT
RUN chown www-data.www-data /var/www/html -R

WORKDIR /var/www/html

EXPOSE 80/tcp
