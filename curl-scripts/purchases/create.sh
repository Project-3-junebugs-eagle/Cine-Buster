#!/bin/bash
# TOKEN="9509ea0e54185d80bb185466c8d12bd6" TITLE="hu" DESCRIPTION="vfd" PRICE="ddd" REVIEW="ddfS" sh curl-scripts/purchases/create.sh 

API="http://localhost:4741"
URL_PATH="/purchases"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
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