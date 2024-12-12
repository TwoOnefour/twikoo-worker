const hasValidHeader = (request, env) => {
    return request.headers.get("Authorization") === "Bearer " + env.AUTH_KEY_SECRET;
  };
  
  
  export default {
    async fetch(request, env, ctx) {
      const url = new URL(request.url);
      if (!hasValidHeader(request, env))
          return new Response("Not permitted.", { status: 401 });
      if (request.method !== "POST") return new Response("Method not permitted.", { status: 401 });
      if (url.pathname !== "/api/v1/upload"){
          return new Response("Path not permitted", { status: 401 });
      }
  
      const formData = await request.formData()
      const photo = await formData.get('file')
      if (!photo) return new Response("Invalid File upload.", { status: 401 });
      await env.MY_BUCKET.put("comment/upload/" + photo.name, photo.stream());
      const responseObject = {
            "status": true,
            "data": {
                "links" : {
                  "url": env.BUCKET_URL + "/comment/upload/" + photo.name
                }
            }
        }
  
      const headers =  {
          'Access-Control-Allow-Origin': '*', // Or your specific origin
          'content-type': 'application/json;charset=UTF-8',
      }
  
      return Response.json(responseObject, {
          headers: headers
      });
  
    },
  };
