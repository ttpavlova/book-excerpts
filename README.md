# Book Excerpts

This project was created in order to interest visitors with various excerpts from books of different genres and writers.

If you don't know which book to choose, click the "Generate" button to get a result. It is selected randomly from the list of added texts.
At the bottom of each publication the author, the title of the book and the chapter from which the excerpt is taken are marked so you can easily find it. If you have already read this work, just repeat the action.

You may even get inspiration and ideas for your own stories.

# Demo

You can try the demo at http://bookexcerpts.pythonanywhere.com/

# Overview

# Build

To build and run this project locally, you'll need Python and Django installed on your computer. The versions that were used in this project are Python 3.9 and Django 1.9.
From your command line:
```
# clone this repository
$ git clone https://github.com/ttpavlova/book-excerpts.git
```

First of all, you need to set up a virtual environment. It will isolate your Python/Django setup for each project. This means that any changes you make to one website won't affect any others you're also developing.
```
# install virtualenv
> C:\Python39\Scripts> pip install virtualenv

# start virtualenv
> C:\Python39\Scripts> virtualenv project01
> C:\Python39\Scripts> cd project01
> C:\Python39\Scripts\project01> cd scripts
> C:\Python39\Scripts\project01\Scripts> activate

# install django
(project01) > C:\Python39\Scripts\project01\Scripts> pip install django==1.9

# create a project 'books'
(project01) > C:\Python39\Scripts\project01\Scripts> django-admin startproject books

# run server
(project01) > C:\Python39\Scripts\project01\Scripts> cd books
(project01) > C:\Python39\Scripts\project01\Scripts\books> python manage.py runserver
```


# Credits

PixiJS — The HTML5 Creation Engine https://pixijs.com/

Online course from ITMO University «Программирование и разработка веб-приложений» https://openedu.ru/course/ITMOUniversity/PWADEV/
