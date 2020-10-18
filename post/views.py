from django.shortcuts import render
#from django.shortcuts import render_to_response
#from django.http import HttpResponse

from .models import Post

from django.shortcuts import get_object_or_404

# Create your views here.

def bookshome(request):
    # count - кол-во записей
    count=Post.objects.all().count()
    content={
        "title":"Домашняя страница",
        "count":count,
    }
    return render(request, "index.html", content)
    
def booksdetail(request, pk):
    instance=get_object_or_404(Post, pk=pk)
    count=Post.objects.all().count()
    content={
        "title":instance.title,
        "instance":instance,
        "count":count,
    }
    return render(request, "booksdetail.html", content)
    
def bookslist(request):
    querybook=Post.objects.all
    content={
        "title":"Список публикаций",
        "object_list":querybook,
    }
    return render(request, "bookslist.html", content)
    
def about(request):
    content={
        "title":"Описание ресурса",
    }
    return render(request, "about.html", content)
