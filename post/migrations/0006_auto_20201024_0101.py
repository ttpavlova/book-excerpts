# Generated by Django 3.1.2 on 2020-10-23 22:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('post', '0005_auto_20201022_2219'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='author',
            field=models.TextField(verbose_name='Автор, название книги и главы'),
        ),
        migrations.AlterField(
            model_name='post',
            name='author_ru',
            field=models.TextField(default='author_ru', verbose_name='Автор, название книги и главы на русском'),
        ),
    ]
