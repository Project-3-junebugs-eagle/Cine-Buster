#!/bin/bash
# TOKEN="9509ea0e54185d80bb185466c8d12bd6" ID="61253de7ccb62b1290965018" TITLE="Good movie" DESCRIPTION="movie" PRICE="20" REVIEW="EXCELLENT" sh curl-scripts/purchases/update.sh 

API="http://localhost:4741"
URL_PATH="/purchases"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
--data '{
  "purchase": {
      "title": "'"${TITLE}"'",
      "description": "'"${DESCRIPTION}"'",
      "price": "'"${PRICE}"'",
      "review": "'"${REVIEW}"'"
    }
  }'

echo