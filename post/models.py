from django.db import models
from django.utils import timezone

# Create your models here.

class Post(models.Model):
    title = models.CharField(u'Заголовок', max_length=100)
    content = models.TextField('Текст записи')
    author = models.TextField('Автор, название книги и главы')
    
    title_ru = models.CharField('Заголовок на русском', max_length=100, default='title_ru')
    content_ru = models.TextField('Текст записи на русском', default='content_ru')
    author_ru = models.TextField('Автор, название книги и главы на русском', default='author_ru')
    
    tpublish=models.DateTimeField('Дата публикации', default=timezone.now)
    
    class Meta:
        verbose_name = 'Запись'
        verbose_name_plural = 'Записи'
        
    def __str__(self):
        return self.title

    def __unicode__(self):
        return self.title
