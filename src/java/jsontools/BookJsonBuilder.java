/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package jsontools;

import entity.Book;
import java.math.BigDecimal;
import java.util.List;
import javax.json.Json;
import javax.json.JsonArray;
import javax.json.JsonArrayBuilder;
import javax.json.JsonObject;
import javax.json.JsonObjectBuilder;

public class BookJsonBuilder {
    public JsonArray getBooksJsonArray(List<Book> listBook){
        JsonArrayBuilder jab = Json.createArrayBuilder();
        for(int i=0;i<listBook.size();i++){
            jab.add(getBookJsonObject(listBook.get(i)));
        }
        return jab.build();
    }
    public JsonObject getBookJsonObject(Book book){
        JsonObjectBuilder job = Json.createObjectBuilder();
        job.add("id", book.getId());
        job.add("bookname", book.getBookName());
        job.add("quantity", book.getQuantity());
        job.add("publishedyear", book.getPublishedYear());
        return job.build();
    }
}
