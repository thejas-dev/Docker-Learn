FROM openjdk:17-jdk-slim

WORKDIR /var/www/java

COPY hello.java /var/www/java/

RUN javac hello.java

CMD ["java", "hello"]