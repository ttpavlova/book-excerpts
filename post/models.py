from django.db import models
from django.utils import timezone

# Create your models here.

class Post(models.Model):
    title=models.CharField(u'Заголовок', max_length=100)
    content=models.TextField('Текст записи')
    tpublish=models.DateTimeField('Дата публикации', default=timezone.now)
    
    class Meta:
        verbose_name='Запись'
        verbose_name_plural='Записи'
        
    def __str__(self):
        return self.title

    def __unicode__(self):
        return self.title
