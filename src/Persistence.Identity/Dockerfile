FROM microsoft/dotnet:2.2-sdk
WORKDIR /migration

# Copy csproj and restore as distinct layers
COPY . .
RUN dotnet restore

RUN dotnet build ./Persistence.Identity/Persistence.Identity.csproj

WORKDIR /migration/Persistence.Identity