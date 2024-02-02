I det här projektet skapas en SPA-klientapplikation baserad på Vue.js tillsammans med Tailwind. I den här sidan ska det går att logga in, lägga till produkter, ta bort produkter, redigera produkter, lägga till kategorier samt lägga till användare. Detta ska utföras med hjälp av CRUD i REST-webbtjänsten. För att använda sig av webbtjänsten används AXIOS eller FETCH-anrop. Det man gör är att skicka med information för att sedan använda serverurl + endpoint (från api.php i webbtjänst). Länkarna finns nedan. En fetch kan se ut på följande sätt:

const resp = await fetch("http://127.0.0.1:8000/api/login", {
    method: "POST",
    headers: {
        Accept: "application/json",
        "Content-type": "application/json",
    },
    body: JSON.stringify(loginBody),
})

Detta är routen för att logga in. Sedan skickar man med användarnamn och lösenord och om dessa finns i databasen loggas man in.

Alla routes som finns:
//public routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::resource('getUser', AuthController::class);
Route::post('/addProduct/{id}',[ ProductController::class, 'addProduct']);
Route::post('/updateImage/{id}',[ ProductController::class, 'updateImage']);
Route::get('/products/search/categories_id/{int}',[ ProductController::class, 'searchCategory']);
Route::get('/category/search/product/{int}',[ CategoryController::class, 'searchProduct']);

//Väg till produkter
Route::resource('products', ProductController::class);

//Väg till kategori
Route::resource('category', CategoryController::class);

//logga ut
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');


Endpoints:
/register
/login
/getUser
/addProduct/{id}
/updateImage/{id}
/products/search/categories_id/{int}
/category/search/product/{int}
/products
/category
/logout