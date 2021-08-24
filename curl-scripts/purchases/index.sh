#!/bin/sh
# TOKEN="9509ea0e54185d80bb185466c8d12bd6" sh curl-scripts/purchases/index.sh

API="http://localhost:4741"
URL_PATH="/purchases"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
