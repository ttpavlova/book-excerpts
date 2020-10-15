# новый файл

from django.urls import path
from . import views

urlpatterns = [
    # http://127.0.0.1:8000/books/ - попадаем на главную страницу
    path('books/', views.bookshome, name='bookshome'),
    # http://127.0.0.1:8000/detail/ - страница со списком книг
    path('<int:pk>/', views.booksdetail, name='booksdetail'),
    # http://127.0.0.1:8000/ - страница со списком книг
    path('', views.bookslist, name='bookslist'),
]