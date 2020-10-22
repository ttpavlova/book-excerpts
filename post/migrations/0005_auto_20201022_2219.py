# Generated by Django 3.1.2 on 2020-10-22 19:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('post', '0004_auto_20201022_2143'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='author_ru',
            field=models.CharField(default='author_ru', max_length=300, verbose_name='Автор, название книги и главы на русском'),
        ),
        migrations.AddField(
            model_name='post',
            name='content_ru',
            field=models.TextField(default='content_ru', verbose_name='Текст записи на русском'),
        ),
        migrations.AddField(
            model_name='post',
            name='title_ru',
            field=models.CharField(default='title_ru', max_length=100, verbose_name='Заголовок на русском'),
        ),
    ]
