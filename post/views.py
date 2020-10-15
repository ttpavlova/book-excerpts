from django.shortcuts import render
#from django.shortcuts import render_to_response
#from django.http import HttpResponse

from .models import Post

from django.shortcuts import get_object_or_404

# Create your views here.

def bookshome(request):
    content={
        "title":"Домашняя страница книг"
    }
    return render(request, "index.html", content)
    
def booksdetail(request, pk):
    instance=get_object_or_404(Post, pk=pk)
    content={
        "title":instance.title,
        "instance":instance,
    }
    return render(request, "booksdetail.html", content)
    
def bookslist(request):
    querybook=Post.objects.all
    content={
        "title":"Список книг",
        "object_list":querybook,
    }
    return render(request, "index.html", content)
