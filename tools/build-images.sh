cd ../src
cd AuthApi
docker build .. -f Dockerfile -t auth:stable -t WORKDESK:5000/auth:stable
docker push WORKDESK:5000/auth:stable
cd ..
cd Persistence.Identity
docker build .. -f Dockerfile -t auth-migration:stable -t WORKDESK:5000/auth-migration:stable
docker push WORKDESK:5000/auth-migration:stable
cd ..
cd Web
docker build .. -f Dockerfile -t k8s-demo:stable -t WORKDESK:5000/k8s-demo:stable
docker push WORKDESK:5000/k8s-demo:stable
cd ../../tools
echo "Docker images build process completed..."
