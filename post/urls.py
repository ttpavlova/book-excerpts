# новый файл

from django.urls import path
from . import views

urlpatterns = [
    # http://127.0.0.1:8000/ - главная страница
    path('', views.bookshome, name='bookshome'),
    
    # http://127.0.0.1:8000/list/<int:pk>/ - страница с конркетным отрывком из книги
    path('<int:pk>/', views.booksdetail, name='booksdetail'),
    
    # http://127.0.0.1:8000/list/ - страница со списком публикаций
    path('list/', views.bookslist, name='bookslist'),
    
    # http://127.0.0.1:8000/about/ - страница с описанием ресурса
    path('about/', views.about, name='about'),
]