from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=255)
    post_date = models.DateField()
    image = models.ImageField(upload_to='static/', blank=True, null=True)
    paragraph = models.TextField(max_length=2000)
    more_details_for_the_dedicated_page = models.TextField(max_length=1000,
default=' ')
    
  