from django.urls import path
from . import views

urlpatterns = [

    path('', views.index, name='index'),   
    path('index/', views.index, name='index'),
    path('about/', views.about, name='about'),
    path('contact/', views.contact, name='contact'),
    path('chatbot/', views.chatbot, name='chatbot'),
    path('form/', views.form, name='form'),
    path('gallery/', views.gallery, name='gallery'),
      path('post/<int:post_id>/', views.post_detail, name='post_detail'),

]
