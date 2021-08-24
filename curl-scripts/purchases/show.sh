#!/bin/sh
# TOKEN="9509ea0e54185d80bb185466c8d12bd6" ID="61253de7ccb62b1290965018" sh curl-scripts/purchases/show.sh 

API="http://localhost:4741"
URL_PATH="/purchases"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo