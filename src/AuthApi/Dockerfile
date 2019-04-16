FROM mcr.microsoft.com/dotnet/core/aspnet:2.2 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:2.2 AS build
WORKDIR /src
COPY ["AuthApi/AuthApi.csproj", "AuthApi/"]

RUN dotnet restore "AuthApi/AuthApi.csproj"
COPY . .
WORKDIR "/src/AuthApi"
RUN dotnet build "AuthApi.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "AuthApi.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .

ENTRYPOINT ["dotnet", "AuthApi.dll"]
