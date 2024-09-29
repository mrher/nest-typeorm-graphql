npm i

npm run start:dev

playground
# query {
#   helloWorld
# }

# mutation Hui {
#   createPhoto(input: {
#      name: "Sunset",
#     description: "A beautiful sunset photo.",
#     filename: "sunset.jpg",
#     views: 120,
#     isPublished: true
#   }) {
#     id,
#     name,
#     description,
#     filename,
#     views,
#     isPublished
#   }
# }

# query {getPhotos{id,
#     name,
#     description,
#     filename,
#     views,
#     isPublished}}

# mutation {addView(id: 2) {name,
#     description,
#     filename,
#     views,
#     isPublished}
# }

mutation deletePhoto {deletePhoto(id: 1)}