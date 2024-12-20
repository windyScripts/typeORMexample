import { AppDataSource } from "./data-source"
import { Author } from "./entity/Author"
import { Book } from "./entity/Book"
import { Cover } from "./entity/Cover"
import { Introduction } from "./entity/Introduction"

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new author into the database...")
    const author = new Author()
    author.firstName = "Penne"
    author.lastName = "Macaroni"
    author.age = 25

    console.log("Inserting a new book");
    const book = new Book();
    book.edition = 1;
    book.pages = 200;
    book.title = "Isle of Pasta"

    console.log("Inserting a new cover");
    const cover = new Cover();
    cover.color = "Blue"
    cover.description = "Blue with Turqoise gem inset"

    console.log("Inserting a new introduction");
    const introduction = new Introduction();
    introduction.length = 15;
    introduction.text = 'The pasta rose and fell in eddies of glorious languidity. Until it no longer did.'
    introduction.title = "Lasagna of Lucidity"
    introduction.book = book

    await AppDataSource.manager.save(author)
    console.log("Saved a new Author with id: " + author.id)

    await AppDataSource.manager.save(book)
    console.log("Saved a new Book with id: " + author.id)

    await AppDataSource.manager.save(introduction)
    console.log("Saved a new Introduction with id: " + author.id+ ". Has a one to one relation with Book.")

    console.log("Loading users from the database...")
    const authors = await AppDataSource.manager.find(Author)
    console.log("Loaded users: ", authors)

    const bookRepository = AppDataSource.getRepository(Book)
    const books = await bookRepository.find({relations:{introduction:true}})
    console.log("Loaded books: ", books)

    const books2 = await AppDataSource.getRepository(Book)
    .createQueryBuilder("book")
    .innerJoinAndSelect("book.introduction","introduction")
    .getMany()

    console.log("Loaded inner join of books: ", books2)

    //console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))