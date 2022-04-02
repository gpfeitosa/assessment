FROM maven:3-jdk-11 AS project-build

WORKDIR /api
ADD src /api/src
ADD pom.xml /api
RUN mvn clean install --fail-never
EXPOSE 8080
ENTRYPOINT ["java","-jar","./target/assessment.jar"]